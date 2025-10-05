---
layout: topic-review
title: "Biostatistics"
redirect_from:
  - /absite/22_20-biostatistics/
permalink: /landmark/topic-review/biostatistics/
---

Descriptive Statistics Mean Average of data set . Can be skewed by extreme values . Mean of (1,6,2,6,7,4) is 4 .33 . Median Middle value of data set . Resistant to skew by extreme values . Median of (1,6,2,6,7,4) is 5 (in a dataset with even number of values, take the average of the two middle values) . Mode Most common value of data set . Range Difference between the largest and the smallest value in the data set .
- Standard deviation describes how variable the points in the data set are compared to the mean of the data set .
- Normal distribution (aka Bell Curve or Gaussian distribution)
- must be symmetric bell-shaped curve with the following standard deviations
 - 1 SD = 68% of samples are around the mean
 - 2 SD = 95% of samples are around the mean
 - 3 SD = 99 .7% of samples are around the mean
- Other distributions:
 - Bimodal distribution: two peaks
 - Positively skewed distribution: peak is skewed toward the left, long tail on the right (mean > median > mode)
 - Negatively skewed distribution: peak is skewed toward the right, long tail on the left (mode > median > mean)

Statistical Testing
- Hypothesis testing
 - Null hypothesis (H0) - there is no difference between two groups
 - Alternative hypothesis (H1) - there is a difference between two groups Definition Related concept Type 1 error H0 is rejected when it is actually true . Thus H1 is accepted when it is actually false . (False positive) Alpha (α) is the probability of a type 1 error . This is the p-value, often set to 0 .05 (5% chance of a type 1 error) . Type 2 error H0 is accepted when it is actually false . Thus H1 is rejected when it is actually true . (False negative) Beta (β) is the probability of a type 2 error. 1-β is the power, often set to 80% . Power increases with sample size .
- Common data structure scenarios and the appropriate tests:
 - Compare numerical means of two different groups: unpaired t-test (example: average BMI in sleeve versus bypass patients)
 - Compare two different numerical measurements taken from a single group of patients: paired t-test (example: BMI in patients before versus after getting a sleeve)
 - Compare numerical means of three or more groups: ANOVA (example: average BMI in sleeve versus bypass versus gastric band patients)
 - Compare categorical outcomes between two or more groups: chi-square test or Fischer’s exact test (example: does VTE occur more often in patients who are obese?)

 - Identify and adjust for multiple potential factors contributing to a categorical outcome: multivariate logistic regression (example: in a large database, determine what variables contribute to incidence of infection)
 - Identify and adjust for multiple potential factors contributing to a numerical outcome: multivariate linear regression (example: in a large database, determine what variables contribute to total length of stay)
 - Identify difference in survivorship over time between two or more groups: Kaplan-Meier analysis (example: cancer survival in patients who received neoadjuvant versus adjuvant chemotherapy) Types of Studies
- Case report - report of a single event or patient
- Case series - report of a small number of similar events or patients
- Prospective study - a research question and hypothesis is formed, then the data are collected
- Retrospective study - a research question and hypothesis are tested on existing data
- Observational study - analyze variables and outcomes in a non-controlled, natural group of subjects
 - Cross-sectional study - analyze a population at a particular moment in time, to determine prevalence of factors and disease
 - Cohort study - a population of subjects are analyzed to associate certain factors with an outcome; can be retrospective or prospective; can determine relative risk
 - Case-control study - patients who had an outcome happen are compared to patients who did not have the outcome happen; these are always retrospective; cannot determine relative risk, only odds ratio

- Randomized controlled trial - rigorous study of an intervention done on two randomly assigned groups of subjects so that both groups are similar; these are always prospective
 - Single-blinded - the subjects do not know their group, but the researchers do
 - Double-blinded - neither the subjects nor the researchers know the groups
- Propensity-score-matched study - observational study that attempts to reduce confounding and be closer to a randomized controlled trial; cases are selected so that the subjects in both groups are similar across multiple factors
- Crossover study - each subject switches from one intervention to the other during the study, serving as their own control
- Systematic review - data from multiple studies are pooled
 - Meta-analysis - data from multiple studies are pooled with quantitative statistical methods Clinical Drug Trials
- Preclinical - animal studies
- Phase 1 - small number of healthy subjects to test the pharmacology and side-effects of the drug
- Phase 2 - small number of diseased subjects to test the efficacy and dosing of the drug
- Phase 3 - randomized control trial to compare the drug to existing therapies
- Phase 4 - ongoing long-term trials after drug is approved to identify long-term side-effects and efficacy Types of Risk
- Risk is the probability of a bad outcome

Outcome did not happen Outcome happened Exposed to risk factor, or not treated with intervention a b Not exposed to risk factor, or treated with intervention c d Common risk-related concepts and how to calculate them Absolute risk Overall probability of the outcome (a+b) / (a+b+c+d) Relative risk Probability of the outcome in exposed group compared to probability of outcome in non-exposed group (a/(a+b)) ------------ (c/(c+d)) Odds ratio Odds of the outcome in exposed group compared to odds of outcome in non-exposed group (a/b) ------ (c/d) Relative risk reduction Proportion of decreased risk due to not being exposed 1 - relative risk Absolute risk reduction Difference in risk due to not being exposed (c/c+d) - (a/ (a+b)) Number needed to treat Subjects that must be treated before one outcome is avoided 1 / absolute risk reduction Diagnostic Testing
- Sensitivity - chance that a diseased person will test positive
- Specificity - chance that a non-diseased person will test negative
 - “SpIN and SnOUT” - Specific tests are good to rule in, Sensitive tests are good to rule out
- Positive predictive value - chance that a positive test result is correct

- Negative predictive value - chance that a negative test result is correct
 - Predictive values take into account the prevalence of the disease; sensitivity and specific do not
- Receiver-operating curve (ROC) - analyze what happens to sensitivity and specificity when you move the cut-off value of the test up or down
 - Larger area under the ROC curve means a better test
- How to calculate these:

Common Types of Bias Lead-time bias Falsely conclude that patients live longer when they were actually diagnosed earlier Length-time bias Falsely conclude that screening improves survival when actually screening only detects more benign disease courses Surveillance bias Falsely conclude that a disease is becoming more prevalent when actually we are testing for it more frequently Recall bias Subjects or researchers are more likely to remember certain factors than others (affects retrospective studies) Allocation bias A confounding factor affects the likelihood that a subject is assigned to a particular group in the study (solved by randomization) Hawthorne effect Subjects behave differently when they know they are being observed

## Figures

![Figure from page 269](./images/22_20-biostatistics_p269_i1.png)
