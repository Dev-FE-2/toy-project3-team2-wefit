import { supabase } from './Supabase';
import { UserProps, UpdateData } from '@/types/user';

// 사용자 조회
export async function fetchUsers() {
  const { data, error } = await supabase.from('users').select('*');

  if (error) throw error;
  return data;
}

// 사용자 삭제
export async function deleteUser(userId: string) {
  const { data, error } = await supabase
    .from('users')
    .delete()
    .eq('user_id', userId)
    .select();

  if (error) throw error;
  return data;
}

// 사용자 정보 변경
export async function updateUser(userId: string, updateData: UpdateData) {
  const { data, error } = await supabase
    .from('users')
    .update(updateData)
    .eq('user_id', userId)
    .select();

  if (error) throw error;
  return data;
}

// 사용자 추가
export async function addUser(newUser: UserProps) {
  const { data, error } = await supabase
    .from('users')
    .insert([newUser])
    .select();

  if (error) throw error;
  return data;
}