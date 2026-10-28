export default function Portrait({ person, dark = false, className = '', eager = false }) {
  return (
    <div className={`portrait ${dark ? 'dark' : ''} ${className}`}>
      <img src={person.img} alt={`${person.name}, ${person.role}`} loading={eager ? 'eager' : 'lazy'} />
    </div>
  )
}
