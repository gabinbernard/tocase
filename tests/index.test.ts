import assert from "node:assert";
import { test } from "node:test";
import toCase from '../src/index'


const str1 = "FirstTestOfAFunction"
test(str1, () => {
    assert.strictEqual(toCase(str1, "camel"), "firstTestOfAFunction");
    assert.strictEqual(toCase(str1, "pascal"), "FirstTestOfAFunction");
    assert.strictEqual(toCase(str1, "snake"), "first_test_of_a_function");
    assert.strictEqual(toCase(str1, "uppercaseSnake"), "FIRST_TEST_OF_A_FUNCTION");
    assert.strictEqual(toCase(str1, "kebab"), "first-test-of-a-function");
    assert.strictEqual(toCase(str1, "uppercaseKebab"), "FIRST-TEST-OF-A-FUNCTION");
    assert.strictEqual(toCase(str1, "capital"), "First Test Of A Function");
    assert.strictEqual(toCase(str1, "space"), "first test of a function");
    assert.strictEqual(toCase(str1, "uppercaseSpace"), "FIRST TEST OF A FUNCTION");
    assert.strictEqual(toCase(str1, "dot"), "first.test.of.a.function");
    assert.strictEqual(toCase(str1, "uppercaseDot"), "FIRST.TEST.OF.A.FUNCTION");
});

const str2 = "strong_variable_type_300_ms_long"
test(str2, () => {
    assert.strictEqual(toCase(str2, "camel"), "strongVariableType300MsLong");
    assert.strictEqual(toCase(str2, "pascal"), "StrongVariableType300MsLong");
    assert.strictEqual(toCase(str2, "snake"), "strong_variable_type_300_ms_long");
    assert.strictEqual(toCase(str2, "uppercaseSnake"), "STRONG_VARIABLE_TYPE_300_MS_LONG");
    assert.strictEqual(toCase(str2, "kebab"), "strong-variable-type-300-ms-long");
    assert.strictEqual(toCase(str2, "uppercaseKebab"), "STRONG-VARIABLE-TYPE-300-MS-LONG");
    assert.strictEqual(toCase(str2, "capital"), "Strong Variable Type 300 Ms Long");
    assert.strictEqual(toCase(str2, "space"), "strong variable type 300 ms long");
    assert.strictEqual(toCase(str2, "uppercaseSpace"), "STRONG VARIABLE TYPE 300 MS LONG");
    assert.strictEqual(toCase(str2, "dot"), "strong.variable.type.300.ms.long");
    assert.strictEqual(toCase(str2, "uppercaseDot"), "STRONG.VARIABLE.TYPE.300.MS.LONG");
});

const str3 = "lOng-RanDoM-1000-STRING-yEAh-4"
test(str3, () => {
    assert.strictEqual(toCase(str3, "camel"), "longRandom1000StringYeah4");
    assert.strictEqual(toCase(str3, "pascal"), "LongRandom1000StringYeah4");
    assert.strictEqual(toCase(str3, "snake"), "long_random_1000_string_yeah_4");
    assert.strictEqual(toCase(str3, "uppercaseSnake"), "LONG_RANDOM_1000_STRING_YEAH_4");
    assert.strictEqual(toCase(str3, "kebab"), "long-random-1000-string-yeah-4");
    assert.strictEqual(toCase(str3, "uppercaseKebab"), "LONG-RANDOM-1000-STRING-YEAH-4");
    assert.strictEqual(toCase(str3, "capital"), "Long Random 1000 String Yeah 4");
    assert.strictEqual(toCase(str3, "space"), "long random 1000 string yeah 4");
    assert.strictEqual(toCase(str3, "uppercaseSpace"), "LONG RANDOM 1000 STRING YEAH 4");
    assert.strictEqual(toCase(str3, "dot"), "long.random.1000.string.yeah.4");
    assert.strictEqual(toCase(str3, "uppercaseDot"), "LONG.RANDOM.1000.STRING.YEAH.4");
});

const str4 = "TheUltimateHTMLAndCSSCourse4BeginnersPartAB"
test(str4, () => {
    assert.strictEqual(toCase(str4, "camel"), "theUltimateHtmlAndCssCourse4BeginnersPartAb");
    assert.strictEqual(toCase(str4, "pascal"), "TheUltimateHtmlAndCssCourse4BeginnersPartAb");
    assert.strictEqual(toCase(str4, "snake"), "the_ultimate_html_and_css_course_4_beginners_part_ab");
    assert.strictEqual(toCase(str4, "uppercaseSnake"), "THE_ULTIMATE_HTML_AND_CSS_COURSE_4_BEGINNERS_PART_AB");
    assert.strictEqual(toCase(str4, "kebab"), "the-ultimate-html-and-css-course-4-beginners-part-ab");
    assert.strictEqual(toCase(str4, "uppercaseKebab"), "THE-ULTIMATE-HTML-AND-CSS-COURSE-4-BEGINNERS-PART-AB");
    assert.strictEqual(toCase(str4, "capital"), "The Ultimate Html And Css Course 4 Beginners Part Ab");
    assert.strictEqual(toCase(str4, "space"), "the ultimate html and css course 4 beginners part ab");
    assert.strictEqual(toCase(str4, "uppercaseSpace"), "THE ULTIMATE HTML AND CSS COURSE 4 BEGINNERS PART AB");
    assert.strictEqual(toCase(str4, "dot"), "the.ultimate.html.and.css.course.4.beginners.part.ab");
    assert.strictEqual(toCase(str4, "uppercaseDot"), "THE.ULTIMATE.HTML.AND.CSS.COURSE.4.BEGINNERS.PART.AB");
});

const str5 = "A4"
test(str5, () => {
    assert.strictEqual(toCase(str5, "camel"), "a4");
    assert.strictEqual(toCase(str5, "pascal"), "A4");
    assert.strictEqual(toCase(str5, "snake"), "a_4");
    assert.strictEqual(toCase(str5, "uppercaseSnake"), "A_4");
    assert.strictEqual(toCase(str5, "kebab"), "a-4");
    assert.strictEqual(toCase(str5, "uppercaseKebab"), "A-4");
    assert.strictEqual(toCase(str5, "capital"), "A 4");
    assert.strictEqual(toCase(str5, "space"), "a 4");
    assert.strictEqual(toCase(str5, "uppercaseSpace"), "A 4");
    assert.strictEqual(toCase(str5, "dot"), "a.4");
    assert.strictEqual(toCase(str5, "uppercaseDot"), "A.4");
});