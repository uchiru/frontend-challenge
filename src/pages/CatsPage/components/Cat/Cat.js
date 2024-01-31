export const Cat = ({ cat }) => {

  console.log(cat.url);

  return (
    // <div>{`Кот ${cat.id}`}</div>
    // <div className={className}>
    <div>
      <img
        src={cat?.url && cat.url}
        alt={'здесь был кот'}
      />
    </div>
  );
};
