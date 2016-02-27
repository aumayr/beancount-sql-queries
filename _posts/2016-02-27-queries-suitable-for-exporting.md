---
layout: post
title: "Queries suitable for exporting"
description: "An example query if you intend to export to csv/xls etc."
author: "Alex Johnstone"
author_email: "alexjj@gmail.com"
category: Site
tags: []
---

If you want to save a query as a CSV/xls etc., then it's useful to separate the number and the currency into individual columns.
Here is an example of monthly expenses and income for 2016 which does that.

~~~sql
SELECT 
  month, account, sum(number) as Total, currency
FROM
    year = 2016  
WHERE 
    account ~ 'Expenses' OR
    account ~ 'Income'
GROUP BY month, account, currency 
ORDER BY month, currency, account 

~~~
