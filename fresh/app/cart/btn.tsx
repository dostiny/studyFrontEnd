interface BtnColor {
  color: string;
}

const Btn = (props: BtnColor) => {
  return <button style={{ color: props.color }}>버튼</button>;
};

export default Btn;
