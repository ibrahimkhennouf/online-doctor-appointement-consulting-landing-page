type Props = {
  label: string;
  placeholder: string;
};

function InputItem({ label, placeholder }: Props) {
  return (
    <div>
      <p>{label}</p>
      <input type="text" placeholder={placeholder} className="p-6" />
    </div>
  );
}

export default InputItem;
