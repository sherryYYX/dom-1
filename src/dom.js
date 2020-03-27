//封装dom库
window.dom = {
    create(string) {
        const container = document.createElement("template");
        container.innerHTML = string.trim();
        return container.content.firstChild;
    },
    //新增弟弟
    after(node, node2) { 
        //把node2插到node的弟弟的前面
        node.parentNode.insertBefore(node2, node.nextSibling);
    },
    //新增哥哥
    before(node,node2) {
        node.parentNode.insertBefore(node2, node);
    },
    //新增儿子
    append(parent,node) {
        parent.append(node)
    },
    //新增爸爸
    wrap(node, parent) {
        dom.before(node, parent);
        dom.append(parent,node)
    },
    //删除节点
    remove(node) {
        dom.parentNode.removeChild(node)
        return node;
    },
    //删除节点所有儿子
    empty(node) {
        node.innerHTML = null;
    },
    attr(node, name, value) {//重载
        if (arguments.length ===3) {
            node.setAttribute(name,value)
        } else if (arguments.length ===2) {
            return node.getAttribute(name)
        } 
    },
    text(node, string) {//适配 
        if (arguments.length==2) {
            if ('innerText' in node) {
                node.innerText = string;
            } else {
                node.textContent=string
            } 
        } else if (arguments.length==1) {
            if ('innerText' in node) {
                return node.innerText 
            } else {
                return node.textContent
            } 
        }
    },
    html(node, string) {
        if (arguments===2) {
            node.innerHTML = string;
        } else if (arguments===1) {
            return node.innerHTML
        } 
    },
    style(node, name,value) {
        if (arguments.length===3) {
            node.style[name]=value
        } else if (arguments.length==2) {
            if (typeof name ==='string' ) {
                return node.style[name]
            } else if (name instanceof Object) {
                const object = name
                for (let key in object){
                    node.style[key]=object[key]
                }
            }
        } 
    },
    class: {
        add(node,className) {
            node.classList.add(className)
        },
        remove(node,className) {
            node.classList.remove(className)
        },
        has(node,className) {
            return node.classList.contains(className)
        }
    },
    on(node,eventName,fn) {
        node.addEventListener(eventName,fn)
    },
    off(node,eventName,fn) {
        node.removeEventListener(eventName,fn)
    },
    //scope 范围 
    find(selector,scope) {
        return (scope||document).querySelectorAll(selector)
    },
    //找爸爸
    parent(node) {
         return node.parentNode
    },
    //找儿子
    children(node) {
        return node.children
    },
    //找兄弟
    siblings(node) {
        return Array.from(node.parentNode.children)
        .filter(n => n !== node)
    },
    next(node) {
        let x = node.nextSibling
        while (x && x.nodeType===3) {
            x = x.nextSibling
        }
        return x
    },
    previous(node) {
        let x = node.previousSibling
        while (x && x.nodeType===3) {
            x = x.previousSibling
        }
        return x
    },
    each(nodeList,fn) {
        for (let i = 0; i < nodeList.length;i++){
            fn.call(null,nodeList[i])
        }
    },
    index(node) {
        //获取爸爸的儿子们
        const list = dom.children(node.parentNode)
        let i;
        for (i = 0; i < list.length;i++){
            if (list[i] === node) {
                break;
            }
        }
        return i;
    }
};

