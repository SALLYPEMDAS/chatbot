"""string length for samples

Revision ID: 866ab9c82b06
Revises: 2138c3ae531e
Create Date: 2022-01-22 14:23:22.477696

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '866ab9c82b06'
down_revision = '2138c3ae531e'
branch_labels = None
depends_on = None


def upgrade():
    op.alter_column('samples', 'sample',
        existing_type=sa.String(length=1024),
        type_=sa.String(length=2048),
        existing_nullable=False)


def downgrade():
    pass
