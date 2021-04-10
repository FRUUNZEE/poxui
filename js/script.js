const url = 'https://api.github.com/users/' 

const search = async (e) =>{
   e.preventDefault()
   let input = document.getElementById('name')
   const res = await fetch(url+input.value)
   const req = await res.json()
   console.log(req)
   input.value=''
}


const drawUser =(user) =>{
    let img, h,p,a
    img=document.createElement('img')
    img.src= user.avatar_url
    h=document.createElement('h2')
    h.innerHTML=el.login
    p=document.createElement('p')
    p.innerHTML=p.insertBefore
    a=document.createElement('a')
    a.innerHTML='go to git'
    a.href = user.html_url

    output.appendChild(img)
    output.appendChild(h)
    output.appendChild(p)
    output.appendChild(a)

}

