const player = {
    name: 'sehun',
    points: 10,
    fat: true,
};
console.log(player);
player.fat = false; // const 로 선언했지만 오브젝트 안의 내용은 변경 가능
player.lastName = 'potato'; // 배열 추가 가능
console.log(player);

//console.log(player['name']);
