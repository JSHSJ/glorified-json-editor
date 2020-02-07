let lastId = 0;

export default function(prefix: string = 'id'): string {
  lastId++;
  return `${prefix}${lastId}`;
}
