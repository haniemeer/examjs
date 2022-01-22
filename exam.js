const positive=[ 'It is certain',
     'It is decidedly so',
     'Without a doubt',
     'Yes definitely',
     'You may rely on it',
     'As I see it, yes',
      'Most likely',
     'Outlook good',
      'Yes',
      'Signs point to yes']

    const natural=[
        'Reply hazy, try again',
 'Ask again later',
'Better not tell you now',
 'Cannot predict now',
'Concentrate and ask again'
    ]
    const negative=[
        'Dont count on it',
         'My reply is no',
         'My sources say no',
        ' Outlook not so good',
         'Very doubtful'
    ]
    let number=Math.ceil(Math.random()*3);
    if(number===1){
         let length=Math.ceil(Math.random()*9)
       
         console.log(`positive: ${positive[length]}` )
    }
    else if(number===2){
      let length=Math.ceil(Math.random()*4)
      console.log(`natural: ${natural[length]}`)
    }else
    if(number===3){
  let length=Math.ceil(Math.random()*4)
  console.log(`negative: ${negative[length]}`)
    }


