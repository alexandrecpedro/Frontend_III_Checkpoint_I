export function Card({ name, position, picture }) {
  return (
    <div className="card-component">
      <img src={picture} alt={`Picture of ${name}`} />
      <div className="card-body">
        <h1>{name}</h1>
        <span>{position}</span>
      </div>
    </div>
  )
}