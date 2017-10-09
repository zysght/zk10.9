/**
 * Created by lenovo on 2017/10/9.
 */
function run(arr2) {
    arr2.sort();
    var temp2 = [arr2[0]];
    for (var i = 1; i < arr2.length; i++) {
        if (arr2[i] !== temp2[temp2.length - 1]) {
            temp2.push(arr2[i]);
        }
    }
    console.log(temp2);
    return temp2;
}
run([1, 2, 3, 4, 5, 6, 7, 8, 2, 3]);