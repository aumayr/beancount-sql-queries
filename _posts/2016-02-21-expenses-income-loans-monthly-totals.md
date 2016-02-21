---
layout: post
title: "Expenses, Income and Loans/Mortgage monthly totals"
description: "Expenses, Income and Loans/Mortgage monthly totals"
#author: "Alex Johnstone"
#author_email: "alexjj@gmail.com"
category: Site
tags: []
---

This query produces a table showing top level account monthly totals. A very
high level summary over all time. `FLATTEN` puts each currency on its own line.
Useful for saving as `csv`/pasting into a spreadsheet.

~~~sql
SELECT
    year, month, root(account, 1) as ar, sum(position) as pos
  FROM
    date > 2010-01-01 AND date < 2016-12-31
  WHERE
     account ~ "Expenses" OR
     account ~ "Liabilities:Mortgage" OR
     account ~ "Liabilities:Loan" OR
     account ~ "Income"
  GROUP BY year, month, ar
  ORDER BY year, month, ar
  FLATTEN
~~~
