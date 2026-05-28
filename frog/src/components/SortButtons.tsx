type SortButtonsProps = {
  sortMode: string
  setSortMode: (mode: string) => void
}

export default function SortButtons({
  sortMode,
  setSortMode
}: SortButtonsProps) {

  return (
    <div className="order-change-buttons">

      <button className={`sort-button ${sortMode === 'frog' ? 'active-sort' : ''}`} onClick={() => setSortMode('frog')}>
        Eat the frog
      </button>

      <button className={`sort-button ${sortMode === 'frogChase' ? 'active-sort' : ''}`} onClick={() => setSortMode('frogChase')}>
        Frog with a chaser
      </button>

      <button className={`sort-button ${sortMode === 'snowball' ? 'active-sort' : ''}`} onClick={() => setSortMode('snowball')}>
        Snow Ball
      </button>

      <button className={`sort-button ${sortMode === 'oneForMe' ? 'active-sort' : ''}`} onClick={() => setSortMode('oneForMe')}>
        One for me, one for them
      </button>

      <button className={`sort-button ${sortMode === 'hump' ? 'active-sort' : ''}`} onClick={() => setSortMode('hump')}>
        Hump
      </button>

      <button className={`sort-button ${sortMode === 'added' ? 'active-sort' : ''}`} onClick={() => setSortMode('added')}>
        As added
      </button>

    </div>
  )
}