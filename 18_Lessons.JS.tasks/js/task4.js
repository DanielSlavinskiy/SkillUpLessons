/**
 * дано об’єкт
var skill = {
name: ‘html’,
level: 5
}
Написати метод який поверне строку вигляду “html - 5”
 * 

 */
var skill = {
    name:'html',
    level:5,
    stringLevel : function(){
        return this.name + '-'+ this.level;  
    }
}
console.log(skill.stringLevel());