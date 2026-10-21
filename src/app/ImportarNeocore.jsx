
import Header from "./Header";
import "../styles/importar.css";

export default function ImportarNeocore() {
    return (
        <>
            <Header />

            <section className="box-section">
                <div className="box-div">
                    <span>Workspace</span>
                    <h2>Operações</h2>

                    <nav className="menu-operacoes">
                        <button className="menu-item" type="button">
                            <span className="menu-ponto"></span>
                            Início
                        </button>

                        <button className="menu-item" type="button">
                            <span className="menu-ponto"></span>
                            Contatos
                        </button>

                        <button className="menu-item ativo" type="button">
                            <span className="menu-ponto"></span>
                            Importar
                        </button>

                        <button className="menu-item" type="button">
                            <span className="menu-ponto"></span>
                            Segmentos
                        </button>

                        <button className="menu-item" type="button">
                            <span className="menu-ponto"></span>
                            Governança
                        </button>

                        <button className="menu-item" type="button">
                            <span className="menu-ponto"></span>
                            Logs de auditoria
                        </button>
                    </nav>

                    <div className="box-div-atu">
                        <span> Atualização </span>
                        <h4> 12 novos cadastros foram importados hoje</h4>
                        <span> 3 precisam de revisão manual antes da conciliação. </span>
                    </div>
                </div>



                <div className="box-div-title">
                    <div className="importar-cabecalho">
                        <h1>Importar</h1>
                        <span>
                            Traga cadastros de CRM, ERP ou planilhas para iniciar uma conciliação.
                        </span>
                    </div>

                    <div className="importar-acoes">
                        <label className="importar-busca">
                            <img src="./pesquisa.svg" alt="" />

                            <input
                                type="text"
                                placeholder="Buscar arquivo ou origem"
                                aria-label="Buscar arquivo ou origem"
                            />
                        </label>

                        <button className="importar-modelo" type="button">
                            Baixar modelo
                        </button>

                        <button className="importar-iniciar" type="button">
                            Iniciar importação
                        </button>
                    </div>
                </div>

            </section>
        </>
    );
}
