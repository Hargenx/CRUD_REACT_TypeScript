import { usePage, Page } from '../contexts/Page';

export const Header: React.FC = () => {
    const { page, setPage } = usePage();

    const pageButton = (pageName: Page) => {
        return(
            <button
            className={pageName === page ? 'active' : ''}
            onClick={() => setPage(pageName)}
            >
                {pageName}
            </button>
        )
    }

    return (
        <header>
        <h1>
          <div className="title">CRUD com TypeScript e REACT</div>
          <div className="subtitle">TypeORM e API NEST</div>
        </h1>
        <div className="navigation">
            <div className="internal">
                {pageButton(Page.Pessoa)}
            </div>
            <div className="external">
            <a href="https://brazil.generation.org/"
            target="_blank"
            rel="noreferrer"
            className="button"
            >
                Generation
            </a>
        </div>
        </div>
      </header>
    )
}