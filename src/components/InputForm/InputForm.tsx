interface Props<T> {
  label: string;
  value: T;
  onChange: (value: string) => void;
}

export const InputForm = <T,>({ label, value, onChange }: Props<T>) => (
  <div style={{ display: "flex", gap: "10px" }}>
    <span>{label}</span>
    <input
      type="text"
      value={`${value}`}
      onChange={(event) => onChange(event.target.value)}
    />
  </div>
);
