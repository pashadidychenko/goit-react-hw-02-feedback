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
