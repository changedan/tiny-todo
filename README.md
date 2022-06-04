# tiny-todo
- 리덕스 학습용 토이 프로젝트

<br/>

## 목차
- [사용](#사용)
- [구현](#구현)
	- [파일](#파일)
- [트러블슈팅](#트러블슈팅)

<br/>

## 사용
- React
- CRA
- Redux & Redux Toolkit
- SCSS

<br/>

## 구현
![tiny-todo](https://user-images.githubusercontent.com/90893596/172002245-8e8fcf5b-0a0b-4ae3-9259-e870ddd494c6.png)
<br/>
### 파일
#### `/src/store/`
|파일|내용|
|---|---|
|`index`|reducer 병합|
|`todoSlice`|todo 리스트 기본 설정<br/>todo 추가, todo 삭제, 체크박스|

#### `/src/components/`
|파일|내용|
|---|---|
|`canlendar/Calendar`|현재 날짜|
|`todo/AddTodo`|todo 추가|
|`todo/TodoItem`|todo 삭제, 체크박스|
|`todo/TodoList`|todo 리스트|

<br/>

## 트러블슈팅

### 문제
- `id: action.payload.id++` or `state.id++ ` 작성 시 오류
- ❓ 증가 연산자로 가능한 방법

### 해결
- `Data.now()`

<br/>

### 문제
```shell
Warning: A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component.
```

### 해결
- `value={newTodo || ''}` 으로 수정