window.onload = function(){
    let s1 = document.getElementsByClassName('cont01')[0];
    let ul = s1.getElementsByTagName('ul')[0];
    let li = ul.getElementsByTagName('li');
    let list = s1.getElementsByClassName('list');


    //탭메뉴
    for(let i = 0 ; i < li.length ; i++){
        li[i].onclick = function(){
            for(let j = 0 ; j <li.length ;j++){
                li[j].classList.remove('on')
                list[j].classList.remove('on')
            }
            li[i].classList.add('on')
            list[i].classList.add('on')
        }
    }
    


    // 컬러 캐러샐 좌우 이동
    let container = document.getElementsByClassName('container');
    let arrow1 = document.getElementsByClassName('arrow1');
    let arrow2 = document.getElementsByClassName('arrow2');
    for(let i = 0 ; i < container.length ; i++){
        for(let j = 0 ; j < container.length ; j++){
            container[j].style.transform = 'translateX(0px)'
        }
        let now = 0
        arrow1[i].onclick = function(){
            now--
            if(now == 0){
                container[i].style.transform = 'translateX(0px)'
                container[i].style.transition = '1s'
            }else{
                now = 0
            }
        }
        arrow2[i].onclick = function(){
            now++
            if(now == 1){
                container[i].style.transform = 'translateX(-200px)'
                container[i].style.transition = '1s'
            }else{
                now = 1
            }
        }
    }



    //컬러클릭해서 선택가능하게
    let item = document.getElementsByClassName('item');
    let choose = document.createElement('p');
    let slides = document.getElementsByClassName('slides');
    let color0 = container[0].getElementsByTagName('span');
    let color1 = container[1].getElementsByTagName('span');
    let color2 = container[2].getElementsByTagName('span');
    let color3 = container[3].getElementsByTagName('span');
    let name0 = slides[0].getElementsByClassName('color_text')[0];
    let name1 = slides[1].getElementsByClassName('color_text')[0];
    let name2 = slides[2].getElementsByClassName('color_text')[0];
    let name3 = slides[3].getElementsByClassName('color_text')[0];
    let img0 = item[0].getElementsByClassName('img0')[0];
    let img1 = item[1].getElementsByClassName('img0')[0];
    let img2 = item[2].getElementsByClassName('img0')[0];
    let img3 = item[3].getElementsByClassName('img0')[0];
    let names0 = ['루비 트루','프룻풀','가십','엠파틱','데카던스','그레이셔스','도옌','업그레이디드','빅센','비셔스','포쉬'];
    let names1 = ['듀보넷 버즈','스윗 시나몬','와일드 레블','스테이 큐리어스','핫 파프리카','디보티드 투 데인저',
    '진저렐라','나이스 스파이스','디보티드 투 칠리','브릭 쓰루','쏘리 낫 쏘리'];
    let names2 = ['오,구디','노 포토스','프렌다','캔 유 텔?','코크니','포쉬 핏','레이디 버그','파웃 오브 컨트롤','핑크 빅','빔 데어,던 댓']
    let names3 = ['브릭쓰루','듀보넷 버즈','버닝 러브','쉬어 아웃트레지','서트리니스','만다린 오','카인다 쏘어·타',
    '헬시 웰시 엔드 쓰라이빙','폴 인 러브','테디 2.0']
    let imgSrc0 = ['0-0','0-1','0-2','0-3','0-4','0-5','0-6','0-7','0-8','0-9','0-10'];
    let imgSrc1 = ['1-0','1-1','1-2','1-3','1-4','1-5','1-6','1-7','1-8','1-9','1-10'];
    let imgSrc2 = ['2-0','2-1','2-2','2-3','2-4','2-5','2-6','2-7','2-8','2-9','2-10'];
    let imgSrc3 = ['3-0','3-1','3-2','3-3','3-4','3-5','3-6','3-7','3-8','3-9','3-10'];
    let pallet0 = ['af1f2d','570027','ab0e34','7f312a','863548','c83d4f','a42122','a24f55','621b2d','962722'];
    let pallet1 = ['c95c54','9c4239','72436b','a64d53','f04739','b02f21','a94f4b','c76b62','d1645a','af6169'];
    let pallet2 = ['ec6c95','f05480','e7687f','d55e6b','c02028','a74f43','b42225','ee4c87','c8232b','a5384f'];
    let pallet3 = ['b65451','953831','933a50','da5751','d87c89','e43d45','975054','911517','fb236a','ac6259'];


    for(let i = 0 ; i <color0.length;i++){
        color0[i].style.backgroundColor = '#'+pallet0[i]
    }
    for(let i = 0 ; i <color1.length;i++){
        color1[i].style.backgroundColor = '#'+pallet1[i]
    }
    for(let i = 0 ; i <color2.length;i++){
        color2[i].style.backgroundColor = '#'+pallet2[i] 
    }
    for(let i = 0 ; i <color3.length;i++){
        color3[i].style.backgroundColor = '#'+pallet3[i]
    }
    

    
    for(let i = 0 ; i < color0.length ; i++){
        color0[i].onclick = function(){
            for(let j = 0 ; j < color0.length ; j++){
                color0[j].innerHTML =''
                name0.innerHTML = names0[i]
            }
            color0[i].appendChild(choose)
            img0.src = 'img/'+imgSrc0[i]+'.png'
        }

        color1[i].onclick = function(){
            for(let j = 0 ; j < color1.length ; j++){
                color1[j].innerHTML =''
                name1.innerHTML = names1[i]
            }
            color1[i].appendChild(choose)
            img1.src = 'img/'+imgSrc1[i]+'.png'
        }

        color2[i].onclick = function(){
            for(let j = 0 ; j < color2.length ; j++){
                color2[j].innerHTML =''
                name2.innerHTML = names2[i]
            }
            color2[i].appendChild(choose)
            img2.src = 'img/'+imgSrc2[i]+'.png'
        }

        color3[i].onclick = function(){
            for(let j = 0 ; j < color3.length ; j++){
                color3[j].innerHTML =''
                name3.innerHTML = names3[i]
            }
            color3[i].appendChild(choose)
            img3.src = 'img/'+imgSrc3[i]+'.png'
        }
    }

    //Next 누르면 넘어가게
    let nextBtn = document.getElementsByClassName('next')[0];
    let cont02 = document.getElementsByClassName('cont02')[0];
    let title = cont02.getElementsByClassName('title')[0];
    let titleText = title.getElementsByTagName('h2')[0];
    let trendItem = cont02.getElementsByClassName('item');
    let trendImgSrc0 = ['t0-0','t0-1','t0-2','t0-3'];
    let trendImgSrc1 = ['t1-0','t1-1','t1-2','t1-3'];
    let trendImgSrc2 = ['t2-0','t2-1','t2-2','t3-0','t3-1','t3-2'];
    let subNames0 = ['락드 키스 잉크 24아워 립컬러','레트로 매트 립스틱','파우더 키스 벨벳 블러 슬림 스틱','립펜슬']
    let subNames1 = ['파우더 키스 아이 섀도우','프로스트 립스틱','러스터 글래스 립스틱','엑스트라 미센션 블러쉬']
    let trendNames0 = ['루비 트루','루비 우','루비 뉴','레드']
    let trendNames1 = ['펠트 큐트','엔젤','노 포스트','인투 더 핑크']
    let picture0 = document.getElementsByClassName('picture0')[0];
    let picture1 = document.getElementsByClassName('picture1')[0];
    let picture2 = document.getElementsByClassName('picture2')[0];
    


    count = 0
    nextBtn.onclick = function(){
        console.log('머야')
        count++
        if(count%2 == 1 ){
            titleText.innerHTML = '#ANGEL PINK'
            cont02.style.backgroundColor = '#fc9b99' 
            picture0.src = 'img/'+trendImgSrc2[5]+'.png'
            picture1.src = 'img/'+trendImgSrc2[4]+'.png'
            picture2.src = 'img/'+trendImgSrc2[3]+'.png'
            for(let i = 0 ; i < trendItem.length ; i++){
                let img = trendItem[i].getElementsByTagName('img')[0];
                let subName = trendItem[i].getElementsByTagName('p')[0];
                let name = trendItem[i].getElementsByTagName('strong')[0];


                img.src = 'img/'+trendImgSrc1[i]+'.png'
                subName.innerHTML = subNames1[i]
                name.innerHTML = trendNames1[i]

            }
        }else{
            titleText.innerHTML = '#CHERRY LIPS'
            cont02.style.backgroundColor = '#741614'
            picture0.src = 'img/'+trendImgSrc2[0]+'.png'
            picture1.src = 'img/'+trendImgSrc2[1]+'.png'
            picture2.src = 'img/'+trendImgSrc2[2]+'.png'
            for(let i = 0 ; i < trendItem.length ; i++){
                let img = trendItem[i].getElementsByTagName('img')[0];
                let subName = trendItem[i].getElementsByTagName('p')[0];
                let name = trendItem[i].getElementsByTagName('strong')[0];

                img.src = 'img/'+trendImgSrc0[i]+'.png'
                subName.innerHTML = subNames0[i]
                name.innerHTML = trendNames0[i] 
            }

        } 
    }      

}