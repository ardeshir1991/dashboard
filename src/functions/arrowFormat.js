import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowDownward from '@material-ui/icons/ArrowDownward';


export const arrowFormat = (num)=>{
    console.log(Number(num));
    if(Number(num) > 0){
        return num + ' '  + <ArrowUpward />
    }else if(Number(num) < 0){
        return num + ' ' + <ArrowDownward />
    }
}