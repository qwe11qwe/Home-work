# 멋쟁이 사자처럼 6기 JavaScript 2차 과제

# 이미지 구현

## ![2차과제](https://github.com/qwe11qwe/Home-work/assets/134567486/8c53e195-258d-4712-b100-8af7f3e52ae5)

# 구현

- [x] 이벤트 처리 방식을 사용하여 클릭 이벤트를 걸어주세요.
- [x] 이미지와 색상의 데이터는 data.js 에서 불러와주세요.
- [ ] 각 li 항목들을 클릭하면 배경 색상과 메인 비주얼 이미지를 변경해주세요.
- [ ] 비주얼이 변경되면 상단에 비주얼에 맞는 이름으로 변경해주세요.
- [ ] 함수를 분리시켜주세요.

# 코드 설명

- 이미지 변경 코드

```
const thumbnailImage = this.querySelector("img");
mainVisualImage.src = thumbnailImage.src;
```

-비주얼 이름 변경 코드

```
nickname.textContent = nicknameMap[dataIndex];
```
