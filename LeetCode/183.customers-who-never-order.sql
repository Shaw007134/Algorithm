--
-- @lc app=leetcode id=183 lang=mysql
--
-- [183] Customers Who Never Order
--
-- https://leetcode.com/problems/customers-who-never-order/description/
--
-- database
-- Easy (42.30%)
-- Total Accepted:    87.2K
-- Total Submissions: 205.8K
-- Testcase Example:  '{"headers": {"Customers": ["Id", "Name"], "Orders": ["Id", "CustomerId"]}, "rows": {"Customers": [[1, "Joe"], [2, "Henry"], [3, "Sam"], [4, "Max"]], "Orders": [[1, 3], [2, 1]]}}'
--
-- Suppose that a website contains two tables, the Customers table and the
-- Orders table. Write a SQL query to find all customers who never order
-- anything.
-- 
-- Table: Customers.
-- 
-- 
-- +----+-------+
-- | Id | Name  |
-- +----+-------+
-- | 1  | Joe   |
-- | 2  | Henry |
-- | 3  | Sam   |
-- | 4  | Max   |
-- +----+-------+
-- 
-- 
-- Table: Orders.
-- 
-- 
-- +----+------------+
-- | Id | CustomerId |
-- +----+------------+
-- | 1  | 3          |
-- | 2  | 1          |
-- +----+------------+
-- 
-- 
-- Using the above tables as example, return the following:
-- 
-- 
-- +-----------+
-- | Customers |
-- +-----------+
-- | Henry     |
-- | Max       |
-- +-----------+
-- 
-- 
--
# Write your MySQL query statement below

