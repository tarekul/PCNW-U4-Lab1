import React from 'react'

const Display = props =>{
return <><div className="row">
                <div className="col col-12 button black"><p style={{ textAlign: "right" }}>{props.display}</p></div>
            </div> </>

}

export default Display