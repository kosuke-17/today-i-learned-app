type Props = {
  defaultValue?: boolean
}

export default function SubForm({ defaultValue }: Props) {
  return (
    <label className="flex items-center justify-center cursor-pointer">
      <input
        type="checkbox"
        defaultChecked={defaultValue}
        className="sr-only peer"
      />
      <div
        className="relative w-11 h-6 bg-secondary-light rounded-full peer dark:bg-secondary-main
        peer-checked:after:translate-x-full after:border-gray-300
        rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white 
        after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white 
        after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-main"
      />
      <span className="ms-3 text-lg font-bold">公開</span>
    </label>
  )
}
