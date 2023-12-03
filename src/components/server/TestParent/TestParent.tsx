type Props = {
  children: React.ReactNode;
  hello: number;
};
export default function TestParent(props: Props) {
  // export default function TestParent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>TestParent: {props.hello}</h1>
      {props.children}
    </>
  );
}
