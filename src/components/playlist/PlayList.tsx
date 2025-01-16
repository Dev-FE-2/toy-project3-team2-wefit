import { useEffect, useState } from 'react';
import PlayListItem from '@/components/playlist/PlayListItem';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DroppableProps,
  DropResult,
} from 'react-beautiful-dnd';
import type { PlayListVideoProps, VideoProps } from '@/types/playList';

const StrictModeDroppable = ({ children, ...props }: DroppableProps) => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return <Droppable {...props}>{children}</Droppable>;
};

const PlayList = ({ object, onVideoUrlChange }: PlayListVideoProps) => {
  const initialVideoList: VideoProps[] = object?.categoried_videos || [];
  const [videoList, setVideoList] = useState<VideoProps[]>(initialVideoList);

  useEffect(() => {
    setVideoList(object?.categoried_videos || []);
  }, [object]);

  if (!object) return null;

  const onDragEnd = (result: DropResult) => {
    if (!result?.destination) return;

    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;
    const newList = [...videoList];
    const pickedItem = newList[sourceIndex];

    newList.splice(sourceIndex, 1);
    newList.splice(destinationIndex, 0, pickedItem);
    setVideoList(newList);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <StrictModeDroppable
        droppableId={`droppable-${object.list_id || 'default'}`}
      >
        {provided => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="mt-4 flex flex-col gap-4"
          >
            {videoList?.map((video: VideoProps, index: number) => {
              const draggableId = String(video.video_id || `video-${index}`);

              return (
                <Draggable
                  key={draggableId}
                  draggableId={draggableId}
                  index={index}
                >
                  {dragProvided => (
                    <div
                      ref={dragProvided.innerRef}
                      {...dragProvided.draggableProps}
                      {...dragProvided.dragHandleProps}
                      onClick={handleClick}
                    >
                      <PlayListItem
                        video={String(video)}
                        onVideoUrlChange={onVideoUrlChange ?? (() => {})}
                      />
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </StrictModeDroppable>
    </DragDropContext>
  );
};

export default PlayList;
