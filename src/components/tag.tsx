type Props = {
  name: string;
};

export const Tag = ({ name }: Props) => {
  return (
    <div className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
      {name}
    </div>
  );
};
