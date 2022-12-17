
const data = [
    {
      image:
        "https://www.yoox.com/images/items/13/13910201BS_14_f.jpg?impolicy=crop&width=306&height=390",
      name: "PHILOSHOPY di LORENZ0 SERAFINI",
      description: "Midi Skirt",
      strike: "US$ 702,00",
      off: "34% OFF",
      price: "US$ 458,00"
    },
    {
      image:
        "https://www.yoox.com/images/items/15/15257841AU_14_f.jpg?impolicy=crop&width=306&height=390",
      name: "SOLACE LONDON",
      description: "Short Dress",
      strike: "US$ 449,00 ",
      off: "37% OFF",
      price: "US$ 281,00"
    },
    {
      image:
        "https://www.yoox.com/images/items/45/45717732NW_14_f.jpg?impolicy=crop&width=306&height=390",
      name: "SAINT LAURENT",
      description: "Boots",
      strike: "US$ 449,00",
      off: "20% OFF",
      price: "US$ 1.361,00"
    }
  ];
  function WomenMap() {
    return (
      <div style={{ padding:"1px 0px 50px 0px",marginTop:"2rem", backgroundColor:"rgb(244, 244, 244)"}} >
        <div style={{ display: "flex", gap: "2rem", textAlign:"center", marginTop:"4rem",  }}>
        <div
          style={{
            
            width: "27%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div>
            <p style={{ fontSize: "32px",color:"black", letterSpacing:"2px" }}>ONE OF A KIND</p>
            <a
              style={{ fontSize: "18px", color: "Black" }}
              href="www.google.com"
            >
              VIEW ALL
            </a>
          </div>
        </div>
        {data.map((e) => (
          <div
            style={{
              // border: "1px solid red",
              display: "flex",
              padding: "0px 0px 20px 0px",
              backgroundColor:"white",
              color:"black",
              lineHeight:"2.1"
              
            }}
          >
            <div>
              <img src={e.image} alt={e.name} />
              <h5
                style={{
                  letterSpacing: "1px",
                  fontSize: "16px",
                  width: "85%",
                  margin: "auto",
                  fontWeight:"700",
                  
                }}
              >
                {e.name}
              </h5>
              <p>{e.description}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "16px"
                }}
              >
                <span style={{ textDecoration: "line-through" }}>
                  {e.strike}
                </span>

                <span>{e.off}</span>
              </div>
              <p style={{ fontWeight: "600" }}>{e.price}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    );
  }
  export default WomenMap;
  