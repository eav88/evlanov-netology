## evlanov-netology

**Репозиторий для сдачи домашней работы**

Группа *NDJS-23*

**Домашнее задание к занятию «2.6. База данных и хранение данных»**

**Вводные**
*Каждый документ коллекции books должен содержать следующую структуру данных:*

```
{
  title: "string",
  description: "string",
  authors: "string"
}
```


**Решение**

---

### запрос(ы) для вставки данных минимум о двух книгах в коллекцию books,

**Один**

```
db.books.insertOne( {
  title: "Книга 1",
  description: "Описание",
  authors: "Автор"
} );
```

**Несколько**

```
db.books.insertMany([
    {title: "Книга 1", description: "Описание 1", authors: "Автор 1"},
    {title: "Книга 2", description: "Описание 2", authors: "Автор 2"},
    {title: "Книга 3", description: "Описание 3", authors: "Автор 3"}
]);
```

### запрос для поиска полей документов коллекции books по полю title,

**books**

```
db.books.find({title: "Книга 2"})
```

### запрос для редактирования полей: description и authors коллекции books по _id записи.

```
db.books.updateOne(
      { id: "2" },
      { $set: {description: "Новое описание", authors : "Новый Автор"} }
);
```




