export const localSorage = {

    setItem:(key:string,val:any)=>{

        if(process.client){

            localStorage.setItem(key,JSON.stringify(val))

        }

    },

    getItem:(key:string)=>{

        if(process.client){

            return localStorage.getItem(key)

        }

    },

    removeItem:(key:string)=>{

        if(process.client){

            return localStorage.removeItem(key)

        }

    },

    clear:()=>{

        if(process.client){

            return localStorage.clear()

        }

    },

    key:(index:number)=>{

        if(process.client){

            return localStorage.key(index)

        }

    },

    // 尽量保持和原来的用法一致

    length:process.client?localStorage.length:0

}