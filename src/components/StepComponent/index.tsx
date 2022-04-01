interface TokenSaleStepComponentProps {
  name: string,
}

export const TokenSaleStepComponent: React.FC<TokenSaleStepComponentProps> = ({ name }) => {
  return (
    <div className="grid items-end justify-items-center text-[14px] md:text-[18px] gap-0 w-24">
      <div>{name}</div>
      <div className="place-content-start  w-1 h-3 md:h-5 bg-white"></div>
    </div>
  )
}