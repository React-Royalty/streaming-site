import React from "react";
import { BiMessageDetail } from "react-icons/bi";

function Stats({ media }) {

  //* MEDIA POP UP STATS (TOP ROW) 
  // IF EXISTS: release year, seasons available, runtime
  // ALWAYS (once detailedMedia loaded): hd symbol, subtitle symbol


  return (
    <div className="row">
      { media.releaseYear ? <h4>{ media.releaseYear }</h4> : null }
      { media.seasonsAvailable ? <h4>{ media.seasonsAvailable } Seasons</h4> : null }
      { media.runTime ? <h4>{ media.runTime }</h4> : null }
      { media ? <div className="hd">HD</div> : null }
      { media ? <BiMessageDetail className="subtitle-icon"/> : null }
    </div>
  );
}

export default Stats;