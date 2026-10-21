begin;

-- Admin authorization uses the trusted app_metadata.role claim.
-- Assign the role to a user from a privileged SQL session, replacing the email:
-- update auth.users
-- set raw_app_meta_data = coalesce(raw_app_meta_data, '{}'::jsonb) || '{"role":"admin"}'::jsonb
-- where email = 'admin@example.com';
-- Have that user sign out and back in after changing the role so the JWT refreshes.

alter table public.carnatic_ragas enable row level security;
alter table public.carnatic_alankars enable row level security;

-- Replace existing policies on these two tables so no permissive policy can
-- accidentally grant anonymous or non-admin write access.

revoke all privileges on table public.carnatic_ragas from public, anon, authenticated;
revoke all privileges on table public.carnatic_alankars from public, anon, authenticated;

grant select on table public.carnatic_ragas to anon, authenticated;
grant select on table public.carnatic_alankars to anon, authenticated;
grant insert, update, delete on table public.carnatic_ragas to authenticated;
grant insert, update, delete on table public.carnatic_alankars to authenticated;

do $$
declare
    existing_policy record;
begin
    for existing_policy in
        select tablename, policyname
        from pg_policies
        where schemaname = 'public'
          and tablename in ('carnatic_ragas', 'carnatic_alankars')
    loop
        execute format(
            'drop policy %I on public.%I',
            existing_policy.policyname,
            existing_policy.tablename
        );
    end loop;
end;
$$;

drop policy if exists "Public can read carnatic ragas" on public.carnatic_ragas;
drop policy if exists "Admins can insert carnatic ragas" on public.carnatic_ragas;
drop policy if exists "Admins can update carnatic ragas" on public.carnatic_ragas;
drop policy if exists "Admins can delete carnatic ragas" on public.carnatic_ragas;

drop policy if exists "Public can read carnatic alankars" on public.carnatic_alankars;
drop policy if exists "Admins can insert carnatic alankars" on public.carnatic_alankars;
drop policy if exists "Admins can update carnatic alankars" on public.carnatic_alankars;
drop policy if exists "Admins can delete carnatic alankars" on public.carnatic_alankars;

create policy "Public can read carnatic ragas"
on public.carnatic_ragas
for select
to anon, authenticated
using (true);

create policy "Admins can insert carnatic ragas"
on public.carnatic_ragas
for insert
to authenticated
with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

create policy "Admins can update carnatic ragas"
on public.carnatic_ragas
for update
to authenticated
using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

create policy "Admins can delete carnatic ragas"
on public.carnatic_ragas
for delete
to authenticated
using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

create policy "Public can read carnatic alankars"
on public.carnatic_alankars
for select
to anon, authenticated
using (true);

create policy "Admins can insert carnatic alankars"
on public.carnatic_alankars
for insert
to authenticated
with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

create policy "Admins can update carnatic alankars"
on public.carnatic_alankars
for update
to authenticated
using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

create policy "Admins can delete carnatic alankars"
on public.carnatic_alankars
for delete
to authenticated
using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

commit;
