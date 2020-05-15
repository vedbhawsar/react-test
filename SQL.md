

## Query No. 1

```sql
WITH EmployeeCTE([empid], 
    duplicatecount)
AS (SELECT [empid], 
           ROW_NUMBER() OVER(PARTITION BY [empid]
           ORDER BY id) AS DuplicateCount
    FROM [SampleDB].[dbo].[employee])

DELETE FROM EmployeeCTE
WHERE DuplicateCount > 1;
```
## Query No. 2

The `table` won't be dropped as that table do not have any records. When the ```sql IF EXISTS(SELECT TOP 1 * FROM dbo.region)``` will return no recods. Hence , the `dorp` statement will not execute.


## Query No. 3
### 1

```sql
SELECT * FROM Employee e where  e.deptid NOT IN (SELECT d.deptid FROM Department d);
```

### 2
 
```sql

SELECT * FROM Employee e where  e.deptid NOT IN (SELECT d.deptid FROM Department d);
```