"""add samples table

Revision ID: 2138c3ae531e
Revises: 8a6f4245b750
Create Date: 2021-08-28 14:16:02.857887

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2138c3ae531e'
down_revision = '8a6f4245b750'
branch_labels = None
depends_on = None


def upgrade():
        op.create_table(
        'samples',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('prompt', sa.String(1024), nullable=False),
        sa.Column('sample', sa.String(1024), nullable=False),
    )


def downgrade():
    pass
