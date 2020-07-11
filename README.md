Выполни условия:

-+ создай вспомогательные методы countTotalFeedback() и countPositiveFeedbackPercentage(),
подсчитывающие эти значения основываясь на данных в состоянии (вычисляемые данные). Эти методы -
методы компонента App

-+ Вынеси отображение статистики в отдельный компонент
<Statistics good={} neutral={} bad={} total={} positivePercentage={}>. Пробрось в этот компонент еще
и пропс positivePercentage

-+ Вынеси блок кнопок в компонент <FeedbackOptions options={} onLeaveFeedback={}>.

- Создай компонент <Section title="">, который рендерит секцию с заголовком и детей (children).
  Оберни каждый из <Statistics> и <FeedbackOptions> в созданный компонент секции.

1. Хотелось бы чтобы компонент Statistic получал эти пропсы как написано в задании
   <Statistics good={} neutral={} bad={} total={} positivePercentage={}> Ты же передаешь в секцию
   часть этих пропсов (зачем), а далее пробрасываешь их в Statistic собирая уже в одно свойство
   dataProps... Компонент Section - просто рендерит разметку (презентационный) с заголовком, у него
   1 пропс - title

2. Итого у тебя должны быть 2 секции Оберни каждый из <Statistics> и <FeedbackOptions> в созданный
   компонент секции.

3. Компонент <FeedbackOptions options={} onLeaveFeedback={}>. У него 2 пропса options и
   onLeaveFeedback У тебя одно

4) Итого в App в рендере должна быть секция с FeedbackOptions и вторая со Statistics в которой либо
   результаат либо твой Notification

Перечитай внимаетльно условие задания и следуй четко тому, что написано

<Section title="Заголовок">
< FeedbackOptions ...>
</Section>
