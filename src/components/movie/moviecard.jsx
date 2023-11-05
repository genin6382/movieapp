export default function Moviecard({movie:{Title,Year,imdbID,Type,Poster}}) {
    return(
      <>
          <div className="movie" key={imdbID}>
             <div>
                 <p>{Year}</p>
             </div>
             <div>
                 <img src={Poster!=='N/A'? Poster:'https://via.placeholder.com/400'} alt={Title}/>
             </div>
             <div>
                 <h3>{Title}</h3>
                 <p>{Type}</p>
             </div>
          </div>
      </>
    )
 }