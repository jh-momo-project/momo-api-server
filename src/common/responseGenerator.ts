export type SuccessReponse<T> = {
  data: T;
  message: string;
};

export default function successResGenerator<T>(data?: T): SuccessReponse<T> {
  return { data: data || null, message: 'OK' };
}
