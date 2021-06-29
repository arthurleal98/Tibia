const TableUtility=(props)=>{
    props.pip.forEach((element, index)=>{
        let array = [];
        let key2 = '';
        props.headers.forEach((element2,i)=>{
            if(i===0){
                key2=element[element2]
                array.push(<td key={key2}><Link to ={location=>`Server?value=${element[element2]}`} style={styleLink}>{element[element2]}</Link></td>)
            }
            
            else{
                array.push(<td key={key2+element2}>{ element[element2]}</td>)

            }
            
        })
        if( index ===0){
            content_tr.push(<tr style={colorTr} className='tr_table' key={`${element}_${index}`}>{array}</tr>);
        }
        else if (index%2!==0){
            content_tr.push(<tr style={colorTr2} className='tr_table' key={`${element}_${index}`}>{array}</tr>);
        }
        else{
            content_tr.push(<tr style ={colorTr} className='tr_table' key={`${element}_${index}`}>{array}</tr>);
        }
    });
    setContent_table(content_tr);
    let header_tr=[];
    headers.forEach((element2,i)=>{
        header_tr.push(<th key={element2+'header'} style={styleThead} className='teste' onClick={()=>sorting(element2,1)}>{element2[0].toUpperCase()+element2.slice(1)}</th>)
    });
    setHeader_table(header_tr)
    return(

    )

}