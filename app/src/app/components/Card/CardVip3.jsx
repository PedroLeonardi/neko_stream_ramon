export default function CardVip3() {
  return (
    <>
    
      <div className="card w-85 lg:w-[400] bg-rose-900 text-white p-8 rounded-xl border-3 mt-8">
        <div className="list flex flex-col items-center gap-5">
          <div className="titulo font-extrabold text-3xl"><h2>BLASTER FAN</h2></div>
          <div className="price text-3xl font-extrabold underline underline-offset-8">R$ 199,99/ano</div>
          <div className="button text-[16px] font-bold bg-rose-700 hover:bg-rose-950 duration-200 ease-in rounded-lg p-2"><button type="button" className="cursor-pointer">Comece um teste grátis de 7 dias</button></div>
          <div className="detalhes font-mono"><p>Assista a todo o acervo da Crunchyroll, sem propagandas, com novos episódios logo após o lançamento no Japão.*</p></div>
          <div className="flex flex-col items-center text-center">
            <span className="uppercase text-[12px]">——— plus ———</span>
            <span className="text-[13px]">✔ Assista em até 4 telas</span>
            <span className="text-[13px]">✔ Offline viewing</span>
            <span className="text-[13px]">✔ Acesse a Neko Game Vault, um catálogo de jogos gratuitos</span>
            <span className="text-[13px]">✔ 16% de desconto na mensalidade (cobrado anualmente)</span>
          </div>
        </div>
      </div>
    </>

  )
}