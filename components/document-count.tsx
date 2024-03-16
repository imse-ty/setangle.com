export const query = `count(*[_type == "page"])`;

export function DocumentsCount({ data }: { data: number }) {
  return <div>There are {data} documents</div>;
}
