-- Habilitar la extensión UUID (si no está habilitada)
create extension if not exists "uuid-ossp";

-- Crear la tabla 'registros'
create table if not exists public.registros (
    id uuid default uuid_generate_v4() primary key,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    nombre text not null,
    apellidos text not null,
    email text not null,
    telefono text
);

-- Habilitar RLS (Row Level Security) para la tabla
alter table public.registros enable row level security;

-- Política 1: Permitir a cualquier persona (incluso no autenticados) insertar registros
-- Esto es esencial para el formulario público en la Landing Page
create policy "Permitir inserciones públicas"
    on public.registros
    for insert
    to public
    with check (true);

-- Política 2: Permitir solo a los usuarios autenticados ver los registros
create policy "Permitir lectura a usuarios autenticados"
    on public.registros
    for select
    to authenticated
    using (true);

-- Política 3: Permitir solo a los usuarios autenticados actualizar los registros
create policy "Permitir actualización a usuarios autenticados"
    on public.registros
    for update
    to authenticated
    using (true)
    with check (true);

-- Política 4: Permitir solo a los usuarios autenticados eliminar los registros
create policy "Permitir eliminación a usuarios autenticados"
    on public.registros
    for delete
    to authenticated
    using (true);
