//之前document.creatElement('div')
//const div = dom.create("<div>newDiv</div>")
//console.log(div);
//dom.after(test,div)
//dom.before(test,div)
//dom.append(test, div)
//dom.wrap(div, test);
//console.log(test);
//const nodes = dom.empty(window.empty)
// dom.attr(test,"title","I am ")
// const title = dom.attr(test, "title")
// dom.text(test,"你是猪🐷")
//dom.text(test);//获取test
// dom.style(test, { border: "1px solid black" , color: 'blue'})

// console.log(dom.style(test, "border"))
//  dom.style(test,"border","20px solid red")

// dom.class.add(test, 'red')
// dom.class.add(test, 'blue') 
// dom.class.remove(test, 'blue')
// console.log(dom.class.has(test, 'red'))
// const fn = () => {
//     console.log("点击了")
// }
// dom.on(test, 'click', fn)

// dom.off(test,'click', fn)

// const testDiv = dom.find("#test")[0]
// console.log(testDiv)

// dom.find(".red", testDiv)[0]
// console.log(dom.parent(e1))
//  const x = dom.find("#s2")[0]
// console.log(dom.siblings(dom.find("#s2")[0]))
//  console.log(dom.previous(x))
 //const t = dom.find('#travel')[0]
 //dom.each (dom.children(t), (n) => dom.style(n,'color','red'))

// console.log(dom.index(s2))
const test = dom.find('#test>.red')[0] // 获取对应的元素
dom.style(test, 'color', 'red') // 设置 div.style.color

const divList = dom.find('.red') // 获取多个 div.red 元素
dom.each(divList, (n) => console.log(n)) // 遍历 divList 里的所有元素