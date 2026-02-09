-- Create posts table
create table if not exists posts (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  slug text not null unique,
  content text,
  published boolean default false,
  author_id uuid references auth.users not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create leads table
create table if not exists leads (
  id uuid default gen_random_uuid() primary key,
  email text not null,
  name text,
  status text default 'new',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Turn on Row Level Security
alter table posts enable row level security;
alter table leads enable row level security;

-- Policies
-- Public read access for published posts
create policy "Public posts are viewable by everyone."
  on posts for select
  using ( published = true );

-- Authenticated authors can manage their own posts
create policy "Users can manage their own posts."
  on posts for all
  using ( auth.uid() = author_id );

-- Leads: public insert (for contact forms)
create policy "Anyone can insert leads."
  on leads for insert
  with check ( true );

-- Leads: only authenticated users can view
create policy "Authenticated users can view leads."
  on leads for select
  using ( auth.role() = 'authenticated' );
