import '../styles/MenuTime.css'

const data=
[{id:1,state:'off'},{id:2,state:'off'},{id:3,state:'on'},{id:4,state:'off'},{id:5,state:'off'},{id:6,state:'off'},{id:7,state:'off'},{id:8,state:'off'},{id:9,state:'off'},{id:10,state:'off'}]

function MenuTime(props){
    return(
        <div class="dots-frame">
            <div class="flex-frame">
                {data.map(
                    (data)=> 
                    <div class="dot-box">
                        <div class={"dot "+data.state}>
                        </div>
                    </div>
                    
                )}
            </div>
        </div>
    );
}

export default MenuTime;