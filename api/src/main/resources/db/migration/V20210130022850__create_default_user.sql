

INSERT INTO user (id, full_name, position)
    SELECT 1, 'Nidhal Dogga', 'Full-stack software developer'
    WHERE NOT EXISTS (SELECT 1 FROM use r WHERE id = 1);
