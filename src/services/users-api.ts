import axios, { AxiosResponse } from 'axios';
import { TaskI } from '../interfaces/models';

const TASKS_API = 'http://localhost:4500/users/';

export function getAll(): Promise<AxiosResponse<Array<TaskI>>> {
  return axios.get(TASKS_API);
}
export function get(id: string): Promise<AxiosResponse<TaskI>> {
  return axios.get(TASKS_API + id);
}
export function set(task: TaskI): Promise<AxiosResponse<TaskI>> {
  return axios.post(TASKS_API, task);
}
export function update(task: TaskI): Promise<AxiosResponse<TaskI>> {
  return axios.patch(TASKS_API + task.id, task);
}
export function remove(id: string): Promise<AxiosResponse<{}>> {
  return axios.delete(TASKS_API + id);
}
